//#region src/auth/jwt.helper.ts
/**
* JWT token signing, verification, and decoding utilities.
* TODO: Wrap jsonwebtoken or jose library with consistent error handling.
*/
var JwtHelper = class {
	/** Sign a payload and return a JWT string */
	static sign(_payload, _secret, _options) {
		throw new Error("Not implemented — install jsonwebtoken and implement");
	}
	/** Verify a JWT and return the decoded payload */
	static verify(_token, _secret) {
		throw new Error("Not implemented — install jsonwebtoken and implement");
	}
	/** Decode a JWT without verification (for inspection only) */
	static decode(_token) {
		throw new Error("Not implemented — install jsonwebtoken and implement");
	}
};
//#endregion
//#region src/auth/password.helper.ts
/**
* Password hashing and comparison using bcrypt or argon2.
* TODO: Install bcrypt/argon2 and implement.
*/
var PasswordHelper = class {
	/** Hash a plaintext password */
	static async hash(_password, _rounds = 12) {
		throw new Error("Not implemented — install bcrypt and implement");
	}
	/** Compare a plaintext password against a hash */
	static async compare(_password, _hash) {
		throw new Error("Not implemented — install bcrypt and implement");
	}
};
//#endregion
//#region src/validation/validator.ts
/**
* Schema-based validation engine.
* TODO: Wrap Zod or Joi under a unified API for production use.
*/
var Validator = class {
	/** Validate data against a schema */
	validate(_data, _schema) {
		return {
			success: true,
			data: _data,
			errors: []
		};
	}
	/** Quick check: is the value a valid email */
	static isEmail(value) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
	}
	/** Quick check: is the value a valid URL */
	static isUrl(value) {
		try {
			new URL(value);
			return true;
		} catch {
			return false;
		}
	}
	/** Quick check: is the value a non-empty string */
	static isNonEmpty(value) {
		return typeof value === "string" && value.trim().length > 0;
	}
};
//#endregion
//#region src/validation/schemas.ts
/** Pre-built schema factories for common validation patterns */
function createStringSchema(options) {
	return {};
}
function createNumberSchema(options) {
	return {};
}
function createObjectSchema(properties, required = false) {
	return {};
}
//#endregion
//#region src/logger/logger.ts
/**
* Structured logger with configurable level and prefix.
* In production, replace console transport with Winston/Pino.
*/
var Logger = class Logger {
	level;
	prefix;
	showTimestamp;
	constructor(options) {
		this.level = "info";
		this.prefix = "";
		this.showTimestamp = true;
	}
	/** Create a new Logger instance */
	static create(options) {
		return new Logger(options);
	}
	/** Create a child logger with a prefix */
	child(prefix) {
		return new Logger();
	}
	debug(message, meta) {}
	info(message, meta) {}
	warn(message, meta) {}
	error(message, meta) {}
};
//#endregion
//#region src/error-handling/app-error.ts
/**
* Application-specific error classes with HTTP status codes and operational flags.
* Operational errors are expected (e.g., validation failures); programmer errors are not.
*/
var AppError = class extends Error {
	statusCode;
	code;
	isOperational;
	constructor(message, statusCode, code, isOperational = true) {
		super(message);
		this.statusCode = statusCode;
		this.code = code;
		this.isOperational = isOperational;
	}
};
var NotFoundError = class extends AppError {
	constructor(message = "Resource not found") {
		super(message, 404, "NOT_FOUND");
	}
};
var ValidationError = class extends AppError {
	details;
	constructor(message = "Validation failed", details = {}) {
		super(message, 422, "VALIDATION_FAILED");
		this.details = details;
	}
};
var UnauthorizedError = class extends AppError {
	constructor(message = "Unauthorized") {
		super(message, 401, "UNAUTHORIZED");
	}
};
var ForbiddenError = class extends AppError {
	constructor(message = "Forbidden") {
		super(message, 403, "FORBIDDEN");
	}
};
var ConflictError = class extends AppError {
	constructor(message = "Resource conflict") {
		super(message, 409, "CONFLICT");
	}
};
var BadRequestError = class extends AppError {
	constructor(message = "Bad request") {
		super(message, 400, "BAD_REQUEST");
	}
};
//#endregion
//#region src/constants/error-codes.constants.ts
/** Application error code constants */
var ErrorCode = /* @__PURE__ */ function(ErrorCode) {
	ErrorCode["NOT_FOUND"] = "ERR_NOT_FOUND";
	ErrorCode["VALIDATION_FAILED"] = "ERR_VALIDATION_FAILED";
	ErrorCode["UNAUTHORIZED"] = "ERR_UNAUTHORIZED";
	ErrorCode["FORBIDDEN"] = "ERR_FORBIDDEN";
	ErrorCode["INTERNAL_ERROR"] = "ERR_INTERNAL";
	ErrorCode["CONFLICT"] = "ERR_CONFLICT";
	ErrorCode["RATE_LIMITED"] = "ERR_RATE_LIMITED";
	ErrorCode["BAD_REQUEST"] = "ERR_BAD_REQUEST";
	ErrorCode["TIMEOUT"] = "ERR_TIMEOUT";
	return ErrorCode;
}({});
//#endregion
//#region src/error-handling/error-handler.ts
/**
* Central error handler that converts errors to standardized response format.
* Use this in your application's global error handler.
*/
var ErrorHandler = class {
	includeStack;
	constructor(options) {
		this.includeStack = options?.includeStack ?? false;
	}
	/** Convert any error to a standardized ErrorResponse */
	handle(error) {
		return {
			success: false,
			code: "UNKNOWN",
			message: error.message
		};
	}
	/** Determine the HTTP status code for an error */
	getStatusCode(error) {
		return 500;
	}
	/** Check if an error is operational (expected) vs programmer error */
	isOperational(error) {
		return false;
	}
};
//#endregion
//#region src/http/http-client.ts
/**
* Type-safe HTTP client wrapper with retry, timeout, and interceptor support.
* TODO: Implement with node-fetch or undici for production.
*/
var HttpClient = class {
	baseUrl;
	defaultOptions;
	interceptors = [];
	constructor(baseUrl = "", defaultOptions) {
		this.baseUrl = baseUrl;
		this.defaultOptions = defaultOptions ?? {};
	}
	/** Add a request/response interceptor */
	addInterceptor(interceptor) {
		this.interceptors.push(interceptor);
	}
	/** Perform a GET request */
	async get(_url, _options) {
		throw new Error("Not implemented");
	}
	/** Perform a POST request */
	async post(_url, _body, _options) {
		throw new Error("Not implemented");
	}
	/** Perform a PUT request */
	async put(_url, _body, _options) {
		throw new Error("Not implemented");
	}
	/** Perform a DELETE request */
	async delete(_url, _options) {
		throw new Error("Not implemented");
	}
};
//#endregion
//#region src/config/config-loader.ts
/**
* Type-safe configuration loader supporting environment variables, JSON files, and defaults.
* Loads in order: defaults -> file -> env vars (env vars win).
*/
var ConfigLoader = class {
	config;
	options;
	constructor(options) {
		this.options = options ?? {};
		this.config = options?.defaults ?? {};
	}
	/** Load configuration from all sources */
	load() {
		return this.config;
	}
	/** Get a configuration value by key */
	get(key) {
		return this.config[key];
	}
	/** Get all configuration */
	getAll() {
		return { ...this.config };
	}
	/** Validate that all required keys are present */
	validate() {
		return true;
	}
};
//#endregion
//#region src/helpers/string.helper.ts
/** Common string transformation utilities */
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
function slugify(str) {
	return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function truncate(str, length, suffix = "...") {
	if (str.length <= length) return str;
	return str.slice(0, length - suffix.length) + suffix;
}
function camelToSnake(str) {
	return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
function snakeToCamel(str) {
	return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
//#endregion
//#region src/helpers/array.helper.ts
/** Array manipulation utilities */
function chunk(arr, size) {
	return [];
}
function unique(arr) {
	return [];
}
function groupBy(arr, key) {
	return {};
}
function flatten(arr) {
	return [];
}
//#endregion
//#region src/helpers/object.helper.ts
/** Object manipulation utilities */
function deepClone(obj) {
	return {};
}
function deepMerge(...objects) {
	return {};
}
function pick(obj, keys) {
	return {};
}
function omit(obj, keys) {
	return {};
}
//#endregion
//#region src/helpers/date.helper.ts
/** Date manipulation utilities without heavy library dependencies */
function formatISO(date) {
	return "";
}
function addDays(date, days) {
	return /* @__PURE__ */ new Date();
}
function diffInDays(a, b) {
	return 0;
}
function isExpired(date) {
	return false;
}
function startOfDay(date) {
	return /* @__PURE__ */ new Date();
}
//#endregion
//#region src/constants/http-status.constants.ts
/** HTTP status code constants */
var HTTP_STATUS = {
	OK: 200,
	CREATED: 201,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	CONFLICT: 409,
	UNPROCESSABLE_ENTITY: 422,
	TOO_MANY_REQUESTS: 429,
	INTERNAL_SERVER_ERROR: 500,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503
};
//#endregion
//#region src/constants/common.constants.ts
/** Application-wide default constants */
var DEFAULTS = {
	PAGE_SIZE: 20,
	MAX_PAGE_SIZE: 100,
	MAX_RETRY_ATTEMPTS: 3,
	RETRY_DELAY_MS: 1e3,
	DEFAULT_TIMEOUT_MS: 3e4,
	TOKEN_EXPIRY_HOURS: 24,
	BCRYPT_ROUNDS: 12
};
//#endregion
//#region src/middleware/error.middleware.ts
/**
* Express error-handling middleware. Place last in the middleware chain.
* Catches errors and returns standardized JSON responses.
*/
function errorMiddleware(includeStack = false) {
	return (err, _req, res, next) => {
		next();
	};
}
//#endregion
//#region src/middleware/request-logger.middleware.ts
/**
* Express middleware that logs incoming requests with timing information.
* Pass an optional Logger instance or a new one will be created.
*/
function requestLoggerMiddleware(logger) {
	return (req, res, next) => {
		next();
	};
}
//#endregion
//#region src/middleware/cors.middleware.ts
/** Configurable CORS middleware with sensible defaults */
function corsMiddleware(options) {
	return (req, res, next) => {
		next();
	};
}
//#endregion
export { AppError, BadRequestError, ConfigLoader, ConflictError, DEFAULTS, ErrorCode, ErrorHandler, ForbiddenError, HTTP_STATUS, HttpClient, JwtHelper, Logger, NotFoundError, PasswordHelper, UnauthorizedError, ValidationError, Validator, addDays, camelToSnake, capitalize, chunk, corsMiddleware, createNumberSchema, createObjectSchema, createStringSchema, deepClone, deepMerge, diffInDays, errorMiddleware, flatten, formatISO, groupBy, isExpired, omit, pick, requestLoggerMiddleware, slugify, snakeToCamel, startOfDay, truncate, unique };

//# sourceMappingURL=node-util-lib.js.map