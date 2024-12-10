import { DUPLICATE_SUBSCRIPTION, SUBSCRIPTION_ERROR } from '@/actions/newsletter/constans';
import type {
    NewsletterSchemaType,
  NewsletterSubscription,
  SubscriptionResult,
} from '../types/newsletter.types';

export class NewsletterService {
  private subscriptions: NewsletterSubscription[] = [];

  async subscribe(data: NewsletterSchemaType): Promise<SubscriptionResult> {
    try {

        const existingSubscription = this.subscriptions.find(
        (sub) => sub.email === data.email
      );

      if (existingSubscription) {
        return {
          success: false,
          message: 'Email ya registrado',
          code: DUPLICATE_SUBSCRIPTION,
        };
      }

      const newSubscription: NewsletterSubscription = {
        email: data.email,
        source: data.source,
        timestamp: new Date(),
        status: 'pending',
      };

      this.subscriptions.push(newSubscription);

      // email services or DB

      return {
        success: true,
        message: 'Suscripción exitosa',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error en suscripción',
        code: SUBSCRIPTION_ERROR,
      };
    }
  }
}
