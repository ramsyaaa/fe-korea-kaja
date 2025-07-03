import { HttpResponse } from "./container";

export interface EventSchedulesProps {
  //TODO: masih error belum bisa gue cek attribute apa aja
}

export interface EventScheduleDetailProps {
  id: number;
  event_id: number;
  city: string;
  event_date: string;
  event_end_date: string;
  location: string;
  description: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface AllFAQProps {
  //TODO: masih error belum bisa gue cek attribute apa aja
}

export interface FAQDetailProps {
  id: number;
  event_id: number;
  question: string;
  answer: string;
  campaign_section: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface LinksFinalistProps {
  url: string;
  label: string;
  active: boolean;
}

export interface DataFinalistProps {
  // TODO: belum ada contoh data, jd belum bisa mapping
}
export interface AllFinalistProps {
  current_page: number;
  data: DataFinalistProps[];
  first_page_url: string;
  from: string;
  last_page: number;
  last_page_url: string;
  links: LinksFinalistProps[];
}

export interface FinalistDetailProps {
  // TODO: belum ada contoh data
}

export interface AllMerchandisePackageProps {
  // TODO: belum ada contoh data
}

export interface MerchandisePackageDetailProps {
  // TODO: belum ada contoh data
}

export interface DataSpecialRewardProps {}

export interface LinksSpecialRewardProps {}
export interface AllSpecialRewardProps {
  current_page: number;
  data: DataSpecialRewardProps[];
  first_page_url: string;
  from: string;
  last_page: number;
  last_page_url: string;
  links: LinksSpecialRewardProps[];
}

export interface SpecialRewardDetailProps {
  // TODO: belum ada contoh data
}

export interface DataPreviousWinnerProps {
  // TODO: belum ada contoh data
}

export interface LinksPreviousWinnerProps {
  // TODO: belum ada contoh data
}
export interface AllPreviousWinnerProps {
  current_page: number;
  data: DataPreviousWinnerProps[];
  first_page_url: string;
  from: string;
  last_page: number;
  last_page_url: string;
  links: LinksPreviousWinnerProps[];
}

export interface PreviousWinnerDetailProps {
  // TODO: belum ada contoh data
}

export type GetEventSchedulesResponse = HttpResponse<EventSchedulesProps>;
export type GetEventScheduleDetailResponse = HttpResponse<EventScheduleDetailProps>;
export type GetAllFAQResponse = HttpResponse<AllFAQProps>;
export type GetFAQDetailResponse = HttpResponse<FAQDetailProps>;
export type GetAllFinalistResponse = HttpResponse<AllFinalistProps>;
export type GetFinalistDetailResponse = HttpResponse<FinalistDetailProps>;
export type GetAllMerchandisePackageResponse = HttpResponse<AllMerchandisePackageProps>;
export type GetMerchandisePackageDetailResponse = HttpResponse<MerchandisePackageDetailProps>;
export type GetAllSpecialRewardResponse = HttpResponse<AllSpecialRewardProps>;
export type GetSpecialRewardDetailResponse = HttpResponse<SpecialRewardDetailProps>;
export type GetAllPreviousWinnerResponse = HttpResponse<AllPreviousWinnerProps>;
export type GetPreviousWinnerDetailResponse = HttpResponse<PreviousWinnerDetailProps>;
