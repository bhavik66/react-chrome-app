import { setupWorker } from 'msw';
import { handlers } from './handlers';

// Create a new instance of the server with the defined request handlers
export const worker = setupWorker(...handlers);
