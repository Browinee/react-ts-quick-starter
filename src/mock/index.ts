import { setupWorker } from 'msw';
import { handlers } from './auth';

const worker = setupWorker(...handlers);

export { worker };
