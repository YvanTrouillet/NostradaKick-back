function getLigue1Matchday() {
  // Définir la date de début de la saison (généralement début août)
  const seasonStart = new Date('2024-08-09');
  
  // Obtenir la date actuelle
  const currentDate = new Date();
  
  // Calculer la différence en jours entre la date actuelle et le début de la saison
  const diffTime = Math.abs(currentDate - seasonStart);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // Calculer la journée approximative (en supposant une journée tous les 7 jours)
  let matchday = Math.floor(diffDays / 7) + 1;
  
  // Limiter le nombre de journées à 38 (nombre total de journées en Ligue 1)
  matchday = Math.min(matchday, 34);
  
  return matchday;
}

export default getLigue1Matchday;
