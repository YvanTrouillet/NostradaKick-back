import { Match, Competition, Team } from "../models/associations.js";
import fetchMatch from "../modules/matchService.js";

const saveMatchs = async(journey) => {
    const matches = await fetchMatch(journey);

    for (const match of matches) {
            const [competition] = await Competition.findOrCreate({
      where: { name: match.strLeague.slice(7), season: match.strSeason },
      defaults: { logo: match.strLeagueBadge }
    });

    const [homeTeam] = await Team.findOrCreate({
      where: { name: match.strHomeTeam },
      defaults: { country: match.strCountry, city: match.strHomeTeam, logo: match.strHomeTeamBadge }
    });

    const [awayTeam] = await Team.findOrCreate({
      where: { name: match.strAwayTeam },
      defaults: { country: match.strCountry, city: match.strAwayTeam, logo: match.strAwayTeamBadge }
    });

    const [savedMatch] = await Match.findOrCreate({
      where: { date: match.strTimestamp, stadium: match.strVenue },
      defaults: {
        score_home: match.intHomeScore,
        score_away: match.intAwayScore,
        outcome: match.intHomeScore > match.intAwayScore ? "home": match.intHomeScore < match.intAwayScore ? "away":"neutral",
        competition_id: competition.competition_id
      }
    });

    await savedMatch.addTeam(homeTeam); // ajoute une équipe
    await savedMatch.addTeam(awayTeam);
    }
    console.log("Les matchs de la journée ont été sauvegardé en BDD");
    
}

const syncAllMatches = async () => {
    for (let index = 1; index < 38; index++) {
        await saveMatchs(index)       
    }
};

export { syncAllMatches };