export function isError(error: unknown): error is { message: string } {
  return !!error && typeof error === "object" && "message" in error;
}
