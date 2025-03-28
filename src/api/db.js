import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);
//remote DB manager: http://54.211.31.145:5984/_utils/#login

const localDB = new PouchDB('jbt');
console.log('local db')

async function loadDb() {
    try {
      const indexes = await localDB.createIndex({
        index: {
          fields: ['clientId', 'ensaioId', 'table']
        }
      });
      console.log("indexes created")
    } catch (err) {
      console.log(err);
    }

    const changes = localDB.changes({
        since: 'now',
        live: true,
        include_docs: true
      }).on('change', function(change) {
        localDB.replicate.to(cloudDB, {live:false, retry:true}).then(
          () => {console.log("changed into remote")}
        )
      }).on('complete', function(info) {
        // changes() was canceled
      }).on('error', function (err) {
        console.log(err);
      });
      
    // const cloudDB = new PouchDB("http://admin:wyrd@54.211.31.145:5984/jbt-citrus");
    const cloudDB = new PouchDB("https://vesn2r4qyuxcaofr2jsoxwji240dozfx.lambda-url.sa-east-1.on.aws/jbt-citrus");
    
    localDB.replicate.from(cloudDB, {live:false, retry:true}).on('complete', function (info) {
      console.log("replicate from remote complete")
    })
    localDB.replicate.to(cloudDB, {live:false, retry:true}).on('complete', function (info) {
      console.log("replicate to remote complete")
    })
}

function syncToCloud() {
  localDB.replicate.to(cloudDB, {live:false, retry:true}).on('complete', function (info) {
    console.log("replicate to remote complete")
  })
}

export { localDB, loadDb, syncToCloud};

