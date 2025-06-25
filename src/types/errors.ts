class MyCustomError extends Error {
  statusCode: number; // Or string, depending on your preference for status codes
  originalSource: string;
  data?: string | string[] | object; // Additional data to include in the error response

  constructor(message: string, statusCode: number, originalSource: string = 'Unknown') {
    super(message); // Call the parent Error constructor
    this.name = 'MyCustomError'; // Set the name of your custom error

    // Ensure statusCode is a number and assign it
    if (typeof statusCode !== 'number') {
      throw new Error('statusCode must be a number');
    }
    this.statusCode = statusCode;

    if (typeof originalSource !== 'string') {
      throw new Error('originalSource must be a string');
    }
    this.originalSource = originalSource; // Store the source of the error

    // This line is important for proper stack trace in some environments
    Object.setPrototypeOf(this, MyCustomError.prototype);
  }
}

export default MyCustomError;
