export type Task = {
  customer_mail?: string;
  customer_mobile?: string;
  customer_name: string;
  customer_phone?: string;
  task_address: string;
  task_address_provider?: "mapbox";
  task_alternative_addresses: TaskAddress[];
  task_coords: [number, number];
  task_created: string;
  task_date: string;
  task_earliest: string;
  task_history: TaskAction[];
  task_id: string;
  task_job_no: string;
  task_latest: string;
  task_note: string;
  task_open_amount: string;
  task_origin: string;
  task_origin_coords: [number, number];
  task_original_address_query: string;
  task_owner: string;
  task_priority?: 1 | 2 | 5 | 20;
  task_process_time: number;
  task_source: "ADG S3000" | string;
  task_status: TaskStatus; // ToDo
  task_tags: string[];
  task_tour?: string;
  task_to_optimization: boolean;
  task_type: "delivery"; // ToDo
  unclear_location: boolean;
};

export type TaskAddress = {
  label: string;
  street: string;
  value: [number, number];
  zip?: {
    id: string;
    text: string;
    text_de: string;
  };
};

export type TaskAction = {
  id: string;
  timestamp: Date;
  msg: string;
  title?: string;
  type: TaskActionType;
};

export type TaskActionType =
  | "unassigned"
  | "assigned"
  | "prepared"
  | "successfull"
  | "payment";

export type TaskStatus =
  | "unassigned"
  | "assigned"
  | "prepared"
  | "ontheway"
  | "declined"
  | "finished"
  | "successfull"
  | "successful"
  | "attached"
  | "optimizing";
