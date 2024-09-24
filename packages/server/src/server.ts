import Fastify from 'fastify';
import helmet from '@fastify/helmet';

export const server = async () => {
  const fastify = Fastify({
    //http2: true,
    logger: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
    },
  });

  fastify.register(helmet, { global: true });

  fastify.get('/ping', () => {
    return 'pong\n';
  });

  try {
    await fastify.listen({ port: 5550 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
