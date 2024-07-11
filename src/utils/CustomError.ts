import { SupabaseErrorMessage } from "../lib/i18n/i18n.types";

type CustomErrorConfig = {
  message: string;
  code?: ErrorCodes;
};

enum ErrorCodes {
  RATE_LIMITING_ERROR = 429,
  USER_ALREADY_REGISTERD = 422,
  INVALID_CREDENTIALS = 400,
}

export class CustomError extends Error {
  private errorCodes: Record<ErrorCodes, SupabaseErrorMessage> = {
    "429": this.rateLimingError(),
    "422": this.userAlreadyRegister(),
    "400": this.invalidUserCredentials(),
  };

  constructor(protected error: CustomErrorConfig) {
    super(error.message);

    this.generateError();
  }

  generateError() {
    if (this.error.code) {
      return this.errorCodes[this.error.code];
    }

    return "supabase.no-expected" as const;
  }

  private userAlreadyRegister() {
    return "supabase.user-already-registered" as const;
  }

  private rateLimingError() {
    return "supabase.rate-limiting" as const;
  }

  private invalidUserCredentials() {
    return "supabase.invalid-user-credentials" as const;
  }
}
