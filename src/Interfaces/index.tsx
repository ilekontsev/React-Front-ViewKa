export interface DescDataAuth {
  data: {
    token: string;
    user: number;
    expires: number;
  };
}

export interface DescListDialogues {
  data: [InfoListDialogues];
}

export interface DialogProps {
  info: InfoListDialogues;
}

export interface InfoListDialogues {
  can_access_closed: boolean;
  first_name: string;
  id: number;
  is_closed: boolean;
  is_no_index: boolean;
  last_name: string;
  last_seen: { platform: number; time: number };
  online: number;
  online_app: number;
  online_mobile: number;
  photo_50: string;
}
