const endpoints = {
  getSchedules: "/event-schedules",
  getEventScheduleDetail: (schedule_id: string | number) => `/event-schedules/${schedule_id}`,
  getAllFaqs: "/faqs",
  getFaqDetail: (faq_id: string | number) => `faqs/${faq_id}`,
  getAllFinalist: "/finalists",
  getFinalistDetail: (finalist_id: string | number) => `finalists/${finalist_id}`,
  getAllMerchandisePackage: "/merchandise-packages",
  getMerchandisePackageDetail: (merch_id: string | number) => `merchandise-packages/${merch_id}`,
  getAllSpecialReward: "/special-rewards",
  getSpecialRewardDetail: (reward_id: string | number) => `special-rewards/${reward_id}`,
  getAllPreviousWinner: "/previous-winners",
  getPreviousWinnerDetail: (winner_id: string | number) => `previous-winners/${winner_id}`,
};

export default endpoints;
