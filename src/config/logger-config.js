const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} : ${level} : ${message}`;
});

// if anyone uses this logger function, the logs will not only appear in the console, they will also appear in file we mentioned combined.log file
// combined.log file contains all the logger information with timestamps, easy to surf through the logs.
const logger = createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combined.log" }),
  ],
});

module.exports = logger;
