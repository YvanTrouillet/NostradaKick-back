import cron from 'node-cron';
import fetchMatch  from "./modules/matchService";
import matchController from "./controllers/match.controller";
import getLigue1Matchday from "./modules/journeyLeagueOne";

const scheduleTasks = () => {
  // Planifie la synchronisation toutes les 14 minutes
  cron.schedule('*/14 * * * *', async () => {
    console.log('⏳ Synchronisation des matchs en cours...');
      try {
          const day = getLigue1Matchday()
          const matchs = await fetchMatch(day)

          for (const match of matchs) {
              matchController.patchMatchAPI(match);
          }
            console.log('✅ Synchronisation terminée.');
        } catch (error) {
            console.error('❌ Erreur lors de la synchronisation:', error);
        }
  });

  console.log('✅ Le planificateur est actif. Les tâches sont programmées.');
};

export { scheduleTasks };

