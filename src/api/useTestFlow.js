//ESSE ARQUIVO AINDA NAO É UTILIZADO, FOI CRAIDO PARA COMPONENTIZAÇÃO FUTURA DO CODIGO
import { useState } from "react";

/**
 * Hook para gerenciar o fluxo de testes, triplicatas e checar se finalizou.
 *
 * @param {number} totalTestes - Quantidade total de testes (ex: length do plano).
 * @param {boolean} isComposta - Se true, usa triplicata "0" (análise composta).
 */
export function useTestFlow(totalTestes = 0, isComposta = false) {
  const [currentSetting, setCurrentSetting] = useState(1);
  const [interaction, setInteraction] = useState(isComposta ? 0 : 1);
  const [isFinished, setIsFinished] = useState(false);

  /**
   * Avança um passo (pós-salvamento)
   */
  const nextStep = () => {
    // Se não temos plano ainda ou já finalizou, não faz nada
    if (isFinished || totalTestes === 0) return;

    if (isComposta) {
      // Exemplo de lógica: se composta, sempre pula para o próximo teste
      if (currentSetting >= totalTestes) {
        setIsFinished(true);
      } else {
        setCurrentSetting(currentSetting + 1);
      }
    } else {
      // Lógica de triplicata normal (1 a 3)
      if (currentSetting === totalTestes && interaction === 3) {
        // Ultimo teste e ultima triplicata
        setIsFinished(true);
      } else if (interaction === 3) {
        // Passa para o próximo teste
        setInteraction(1);
        setCurrentSetting(currentSetting + 1);
      } else {
        // Próxima triplicata
        setInteraction(interaction + 1);
      }
    }
  };

  return {
    currentSetting,
    interaction,
    isFinished,
    nextStep,
    setCurrentSetting,
    setInteraction,
    setIsFinished,
  };
}
