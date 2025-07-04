import { useQuery } from "react-query";
import {
  GET_ALL_FAQS,
  GET_ALL_FINALIST,
  GET_ALL_MERCHANDISE_PACKAGE,
  GET_ALL_PREVIOUS_WINNER,
  GET_ALL_SPECIAL_REWARD,
  GET_EVENT_SCHEDULE_DETAIL,
  GET_EVENT_SCHEDULES,
  GET_FINALIST_DETAIL,
  GET_MERCHANDISE_PACKAGE_DETAIL,
  GET_PREVIOUS_WINNER_DETAIL,
  GET_SPECIAL_REWARD_DETAIL,
} from "./query-keys";
import {
  getAllFAQs,
  getEventSchedules,
  getEventScheduleDetail,
  getFAQDetail,
  getAllFinalist,
  getFinalistDetail,
  getAllMerchandisePackage,
  getMerchandisePackageDetail,
  getAllSpecialReward,
  getSpecialRewardDetail,
  getAllPreviousWinner,
  getPreviousWinnerDetail,
} from "./services";
import {
  AllFaqsPayload,
  AllFinalistPayload,
  AllMerchandisePackagePayload,
  AllPreviousWinnerPayload,
  AllSpecialRewardPayload,
  EventSchedulesPayload,
} from "src/types/network/request";

export const useFetchEventSchedules = (payload: EventSchedulesPayload, enabled: boolean = true) => {
  return useQuery([GET_EVENT_SCHEDULES, payload], () => getEventSchedules(payload), {
    enabled,
  });
};

export const useFetchEventScheduleDetail = (
  schedule_id: string | number,
  enabled: boolean = true,
) => {
  return useQuery(
    [GET_EVENT_SCHEDULE_DETAIL, schedule_id],
    () => getEventScheduleDetail(schedule_id),
    {
      enabled,
    },
  );
};

export const useFetchAllFaqs = (payload: AllFaqsPayload, enabled: boolean = true) => {
  return useQuery([GET_ALL_FAQS, payload], () => getAllFAQs(payload), {
    enabled,
  });
};

export const useFetchFAQDetail = (faq_id: string | number, enabled: boolean = true) => {
  return useQuery([GET_ALL_FAQS, faq_id], () => getFAQDetail(faq_id), {
    enabled,
  });
};

export const useFetchAllFinalist = (payload: AllFinalistPayload, enabled: boolean = true) => {
  return useQuery([GET_ALL_FINALIST, payload], () => getAllFinalist(payload), {
    enabled,
  });
};

export const useFetchFinalistDetail = (finalist_id: string, enabled: boolean = true) => {
  return useQuery([GET_FINALIST_DETAIL, finalist_id], () => getFinalistDetail(finalist_id), {
    enabled,
  });
};

export const useFetchAllMerchandisePackage = (
  payload: AllMerchandisePackagePayload,
  enabled: boolean = true,
) => {
  return useQuery([GET_ALL_MERCHANDISE_PACKAGE, payload], () => getAllMerchandisePackage(payload), {
    enabled,
  });
};

export const useFetchMerchandisePackageDetail = (merch_id: string, enabled: boolean = true) => {
  return useQuery(
    [GET_MERCHANDISE_PACKAGE_DETAIL, merch_id],
    () => getMerchandisePackageDetail(merch_id),
    {
      enabled,
    },
  );
};

export const useFetchAllSpecialReward = (
  payload: AllSpecialRewardPayload,
  enabled: boolean = true,
) => {
  return useQuery([GET_ALL_SPECIAL_REWARD, payload], () => getAllSpecialReward(payload), {
    enabled,
  });
};

export const useFetchSpecialRewardDetail = (reward_id: string, enabled: boolean = true) => {
  return useQuery([GET_SPECIAL_REWARD_DETAIL, reward_id], () => getSpecialRewardDetail(reward_id), {
    enabled,
  });
};

export const useFetchAllPreviousWinner = (
  payload: AllPreviousWinnerPayload,
  enabled: boolean = true,
) => {
  return useQuery([GET_ALL_PREVIOUS_WINNER, payload], () => getAllPreviousWinner(payload), {
    enabled,
  });
};

export const useFetchPreviousWinnerDetail = (winner_id: string, enabled: boolean = true) => {
  return useQuery(
    [GET_PREVIOUS_WINNER_DETAIL, winner_id],
    () => getPreviousWinnerDetail(winner_id),
    {
      enabled,
    },
  );
};
