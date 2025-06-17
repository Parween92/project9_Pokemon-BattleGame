class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message); // hier muss die Nachricht vom normalen Error übernohmen
    this.statusCode = statusCode; // eigenen Statuscode speichern
  }

  //Fehlerinfos als Objekt zurückgeben
  toJSON() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      name: this.name,
    };
  }
}

export default ErrorResponse;
