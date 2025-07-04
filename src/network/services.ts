import http from "src/core";
import endpoints from "./endpoints";
import {
  GetAllFAQResponse,
  GetAllFinalistResponse,
  GetAllMerchandisePackageResponse,
  GetAllPreviousWinnerResponse,
  GetAllSpecialRewardResponse,
  GetEventScheduleDetailResponse,
  GetEventSchedulesResponse,
  GetFAQDetailResponse,
  GetFinalistDetailResponse,
  GetMerchandisePackageDetailResponse,
  GetPreviousWinnerDetailResponse,
  GetSpecialRewardDetailResponse,
} from "src/types/network/response";
import {
  AllFaqsPayload,
  AllFinalistPayload,
  AllMerchandisePackagePayload,
  AllPreviousWinnerPayload,
  AllSpecialRewardPayload,
  EventSchedulesPayload,
} from "src/types/network/request";

export const getEventSchedules = (payload: EventSchedulesPayload): GetEventSchedulesResponse => {
  return http.get(endpoints?.getSchedules, payload);
};

export const getEventScheduleDetail = (
  schedule_id: string | number,
): GetEventScheduleDetailResponse => {
  return http.get(endpoints?.getEventScheduleDetail(schedule_id));
};

export const getAllFAQs = (payload: AllFaqsPayload): GetAllFAQResponse => {
  return http.get(endpoints?.getAllFaqs, payload);
};

export const getFAQDetail = (faq_id: string | number): GetFAQDetailResponse => {
  return http.get(endpoints?.getFaqDetail(faq_id));
};

export const getAllFinalist = (payload: AllFinalistPayload): GetAllFinalistResponse => {
  return http.get(endpoints?.getAllFinalist, payload);
};

export const getFinalistDetail = (finalist_id: string | number): GetFinalistDetailResponse => {
  return http.get(endpoints?.getFinalistDetail(finalist_id));
};

export const getAllMerchandisePackage = (
  payload: AllMerchandisePackagePayload,
): GetAllMerchandisePackageResponse => {
  return http.get(endpoints?.getAllMerchandisePackage, payload);
};

export const getMerchandisePackageDetail = (
  merch_id: string | number,
): GetMerchandisePackageDetailResponse => {
  return http.get(endpoints?.getMerchandisePackageDetail(merch_id));
};

export const getAllSpecialReward = (
  payload: AllSpecialRewardPayload,
): GetAllSpecialRewardResponse => {
  return http.get(endpoints?.getAllSpecialReward, payload);
};

export const getSpecialRewardDetail = (
  reward_id: string | number,
): GetSpecialRewardDetailResponse => {
  return http.get(endpoints?.getSpecialRewardDetail(reward_id));
};

export const getAllPreviousWinner = (
  payload: AllPreviousWinnerPayload,
): GetAllPreviousWinnerResponse => {
  return http.get(endpoints?.getAllPreviousWinner, payload);
};

export const getPreviousWinnerDetail = (
  winner_id: string | number,
): GetPreviousWinnerDetailResponse => {
  return http.get(endpoints?.getPreviousWinnerDetail(winner_id));
};
