
export const client = {
    form: 'Client',
    cliente: ['CTS Matão', 'CTS Catanduva', 'LDC Bebedouro', 'LDC Matão'],
    contato: 'string',
    email: 'string',
    cidade: 'string',
    uf: 'string'
}

export const mp = {
    form: 'mp',
    cliente: client.cliente['*'],
    mp: 'MP YYMMDD',
    data: 'DD/MM/YYYY',
    fruta: ['Hamin MTO', 'Valencia Am. MTO', 'Pera Rio MTO', 'Valencia CAT', 'Natal MTO', 'Natal CAT'],
    faixa: ['< 2"', '2" - 2.3/8"', '2.3/8" - 2.3/4"', '2.3/4" - 3"', '3" - 3.1/4"', '> 3.1/4"'],
    peso: '***.**'
}

export const settingOptions = {
    form: "SettingsOptions",
    settings:
        [
            {
                "Nome do setting": "Custom",
                "Extratora": 391,

                "Copo": '3" STD',
                "Tubo Coador": '0,040"',
                "Tubo de Orifício": '1"',
                "Restrição": '3/8" LI',
                "Reg. de Balança": '3/4"',
                "Cort. Superior": '1" STD',
                "Cort. Inferior": '1" STD',
                "Peel Clearance": '5/64"',
                "rpm": 100
            },
            {
                "Nome do setting": "Padrão",
                "Extratora": 391,

                "Copo": '3" STD',
                "Tubo Coador": '0,040"',
                "Tubo de Orifício": '1"',
                "Restrição": '3/8" LI',
                "Reg. de Balança": '3/4"',
                "Cort. Superior": '1" STD',
                "Cort. Inferior": '1" STD',
                "Peel Clearance": '5/64"',
                "rpm": 100
            },
            {
                "Nome do setting": "Quality",
                "Extratora": 391,

                "Copo": '3" STD',
                "Tubo Coador": '0,040"',
                "Tubo de Orifício": '1"',
                "Restrição": '7/16" LI',
                "Reg. de Balança": '3/4"',
                "Cort. Superior": '1" STD',
                "Cort. Inferior": '1" STD',
                "Peel Clearance": '5/64"',
                "rpm": 100
            },
            {
                "Nome do setting": "Plus",
                "Extratora": 391,

                "Copo": '3" STD',
                "Tubo Coador": '0,062"',
                "Tubo de Orifício": '1"',
                "Restrição": '7/16" LI',
                "Reg. de Balança": '3/4"',
                "Cort. Superior": '1" STD',
                "Cort. Inferior": '1" STD',
                "Peel Clearance": '5/64"',
                "rpm": 100
            },
            {
                "Nome do setting": "Plus Plus",
                "Extratora": 391,

                "Copo": '3" STD',
                "Tubo Coador": '0,062"',
                "Tubo de Orifício": '1"',
                "Restrição": '3/8" LI',
                "Reg. de Balança": '3/4"',
                "Cort. Superior": '1" STD',
                "Cort. Inferior": '1" STD',
                "Peel Clearance": '5/64"',
                "rpm": 100
            },
            {
                "Nome do setting": "2H2L",
                "Extratora": 391,

                "Copo": '3" STD',
                "Tubo Coador": '0,040"',
                "Tubo de Orifício": '1"',
                "Restrição": '3/8" LI',
                "Reg. de Balança": '3/4"',
                "Cort. Superior": '2H2L',
                "Cort. Inferior": '7/8" STD',
                "Peel Clearance": '6/64"',
                "rpm": 100
            },
            {
                "Nome do setting": "2H2L Quality",
                "Extratora": 391,

                "Copo": '3" STD',
                "Tubo Coador": '0,040"',
                "Tubo de Orifício": '1"',
                "Restrição": '7/16" LI',
                "Reg. de Balança": '3/4"',
                "Cort. Superior": '2H2L',
                "Cort. Inferior": '7/8" STD',
                "Peel Clearance": '6/64"',
                "rpm": 100
            },
            {
                "Nome do setting": "2H2L Plus",
                "Extratora": 391,

                "Copo": '3" STD',
                "Tubo Coador": '0,062"',
                "Tubo de Orifício": '1"',
                "Restrição": '7/16" LI',
                "Reg. de Balança": '3/4"',
                "Cort. Superior": '2H2L',
                "Cort. Inferior": '7/8" STD',
                "Peel Clearance": '6/64"',
                "rpm": 100
            },
            {
                "Nome do setting": "Preliminar",
                "Extratora": 391,
                
                "Copo": '3" STD',
                "Tubo Coador": '0,025"',
                "Tubo de Orifício": '1"',
                "Restrição": '3/8" LI',
                "Reg. de Balança": '3/4"',
                "Cort. Superior": '1" STD',
                "Cort. Inferior": '1" STD',
                "Peel Clearance": '5/64"',
                "rpm": 75
            },

            {
                "Nome do setting": "Preliminary State Test",
                "Extratora": "STD",
                "Copo": "3\" STD",
                "Cort. Superior": "1\" STD",
                "Cort. Inferior": "1\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,025\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "3/8\" LI",
                "Reg. de Balança": "3/4\"",
                "rpm": 75
            },
            {
                "Nome do setting": "3\" Quality",
                "Extratora": "HP",
                "Copo": "3\" STD",
                "Cort. Superior": "1\" STD",
                "Cort. Inferior": "1\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "7/16\" LI",
                "Reg. de Balança": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "3\" Padrão",
                "Extratora": "HP",
                "Copo": "3\" STD",
                "Cort. Superior": "1\" STD",
                "Cort. Inferior": "1\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "7/16\" LI",
                "Reg. de Balança": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "3\" Plus",
                "Extratora": "HP",
                "Copo": "3\" STD",
                "Cort. Superior": "1\" STD",
                "Cort. Inferior": "1\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,062\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "3/8\" LI",
                "Reg. de Balança": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "3\" Plus Plus",
                "Extratora": "HP",
                "Copo": "3\" STD",
                "Cort. Superior": "1\" STD",
                "Cort. Inferior": "1\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,062\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "3/8\" LI",
                "Reg. de Balança": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "3\" 2H2L Quality",
                "Extratora": "HP",
                "Copo": "3\" STD",
                "Cort. Superior": "2H2L",
                "Cort. Inferior": "2H2L",
                "Peel Clearance": "6/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "7/16\" LI",
                "Reg. de Balança": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "3\" 2H2L Padrão",
                "Extratora": "HP",
                "Copo": "3\" STD",
                "Cort. Superior": "2H2L",
                "Cort. Inferior": "2H2L",
                "Peel Clearance": "6/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "3/8\" LI",
                "Reg. de Balança": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "3\" 2H2L Plus",
                "Extratora": "HP",
                "Copo": "3\" STD",
                "Cort. Superior": "2H2L",
                "Cort. Inferior": "2H2L",
                "Peel Clearance": "6/64\"",
                "Tubo Coador": "0,062\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "7/16\" LI",
                "Reg. de Balança": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "3\" 2H2L Plus Plus",
                "Extratora": "HP",
                "Copo": "3\" STD",
                "Cort. Superior": "2H2L",
                "Cort. Inferior": "2H2L",
                "Peel Clearance": "6/64\"",
                "Tubo Coador": "0,062\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "3/8\" LI",
                "Reg. de Balança": "3/4\"",
                "rpm": 100
            },

            {
                "Nome do setting": "2.3/8\" Padrão",
                "Copo": "2.3/8\"",
                "Cort. Superior": "3/4\" STD",
                "Cort. Inferior": "3/4\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "3/4\"",
                "Restrição": "3/8\" LI",
                "Anel de Fenda": "3/4\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "2.3/8\" Quality",
                "Copo": "2.3/8\"",
                "Cort. Superior": "3/4\" STD",
                "Cort. Inferior": "3/4\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "3/4\"",
                "Restrição": "7/16\" LI",
                "Anel de Fenda": "3/4\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "PJE Padrão 5/64\"",
                "Copo": "3\" PJE",
                "Cort. Superior": "3/4\" PJE",
                "Cort. Inferior": "3/4\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "3/4\"",
                "Restrição": "3/8\" LI",
                "Anel de Fenda": "3/4\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "PJE Padrão 9/64\"",
                "Copo": "3\" PJE",
                "Cort. Superior": "3/4\" PJE",
                "Cort. Inferior": "3/4\" x 1\"",
                "Peel Clearance": "9/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "3/4\"",
                "Restrição": "3/8\" LI",
                "Anel de Fenda": "3/4\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "PJE Padrão 5/64\" Sem Finisher",
                "Copo": "3\" PJE",
                "Cort. Superior": "3/4\" PJE",
                "Cort. Inferior": "3/4\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,025\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "3/8\" LI",
                "Anel de Fenda": "3/4\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "MZ Quality",
                "Extratora": "HP",
                "Copo": "MZ",
                "Cort. Superior": "1\" STD",
                "Cort. Inferior": "1\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "7/16\" LI",
                "Anel de Fenda": "1\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "MZ Padrão",
                "Extratora": "HP",
                "Copo": "MZ",
                "Cort. Superior": "1\" STD",
                "Cort. Inferior": "1\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "3/8\" LI",
                "Anel de Fenda": "1\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "MZ Plus",
                "Extratora": "HP",
                "Copo": "MZ",
                "Cort. Superior": "1\" STD",
                "Cort. Inferior": "1\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,062\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "7/16\" LI",
                "Anel de Fenda": "1\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "MZ Plus Plus",
                "Extratora": "HP",
                "Copo": "MZ",
                "Cort. Superior": "1\" STD",
                "Cort. Inferior": "1\" STD",
                "Peel Clearance": "5/64\"",
                "Tubo Coador": "0,062\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "3/8\" LI",
                "Anel de Fenda": "1\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "MZ 2H2L Quality",
                "Extratora": "HP",
                "Copo": "MZ",
                "Cort. Superior": "2H2L",
                "Cort. Inferior": "2H2L",
                "Peel Clearance": "6/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "7/16\" LI",
                "Anel de Fenda": "1\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "MZ 2H2L Padrão",
                "Extratora": "HP",
                "Copo": "MZ",
                "Cort. Superior": "2H2L",
                "Cort. Inferior": "2H2L",
                "Peel Clearance": "6/64\"",
                "Tubo Coador": "0,040\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "3/8\" LI",
                "Anel de Fenda": "1\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "MZ 2H2L Plus",
                "Extratora": "HP",
                "Copo": "MZ",
                "Cort. Superior": "2H2L",
                "Cort. Inferior": "2H2L",
                "Peel Clearance": "6/64\"",
                "Tubo Coador": "0,062\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "7/16\" LI",
                "Anel de Fenda": "1\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            },
            {
                "Nome do setting": "MZ 2H2L Plus Plus",
                "Extratora": "HP",
                "Copo": "MZ",
                "Cort. Superior": "2H2L",
                "Cort. Inferior": "2H2L",
                "Peel Clearance": "6/64\"",
                "Tubo Coador": "0,062\"",
                "Tubo de Orifício": "1\"",
                "Restrição": "3/8\" LI",
                "Anel de Fenda": "1\"",
                "Balança Extrativa": "3/4\"",
                "rpm": 100
            }







        ]
}

export const test = {
    form: 'Test',
    cliente: client.cliente['*'],
    ie: 'IE YYMMDD',
    mp: mp.mp['*'],
    variedade: 'string',
    colheita: 'string',
    estagio: 'string',
    tamanho: 'string',
    amostras: 'string',
    regiao: 'string',
    peso: 'string',
    fornecedor: 'string',
    notas: 'string',
    observacoes: 'string',
    settings: [settingOptions.settings['*']]
}

export const weigh = {
    form: 'Weigh',
    ie: test.ie,
    setting: test.settings['*'],
    hora: 'HH:mm',
    teste: '*',
    triplicata: '*',
    qtFrutas: '***',
    casca: '***',
    bagaco: '***',
    fragmento: '***',
    sucoExtr: '***',
    sucoFin: '***',
    polpa: '***',
    total: '***'
}


