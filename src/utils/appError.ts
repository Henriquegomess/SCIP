type Variant = "error" | "warning" | "success";

class AppError {
  public readonly message: string;
  public readonly variant: Variant;

  constructor(message: string, variant: Variant) {
    this.message = message;
    this.variant = variant;
  }
}

export default AppError;
