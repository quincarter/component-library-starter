export interface INotificationBannerComponent {
  bannerTitle: string | undefined;
  bannerDescription: string | undefined;
  getBannerDetails(): Promise<void>;
}

export interface TestJson {
  name: string;
  content: string;
}

export type NotificationState = 'opened' | 'closed';
