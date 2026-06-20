import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { memCache } from 'hono-mem-cache';
import apiRoutes from './routes/index';

const app = new Hono();

const ALLOWED_ORIGINS = ['', 'http://localhost:6200']

// 全局中间件
app.use('*', logger());

app.use('*', cors({
    origin: (origin) => {
        if (ALLOWED_ORIGINS.includes(origin)) {
            return origin
        }
        return 'localhost'
    },
    allowMethods: ['GET', 'OPTIONS'],
}));

/**
 * 配置内存缓存中间件
 * max: 最大缓存项数
 * ttl: 缓存过期时间（毫秒）
 */
app.use('/api/*', memCache({
  max: 100,
  ttl: 300000, // 5分钟缓存
}));

// 健康检查
app.get('/', (c) => {
  return c.json({
    message: 'Migu API Enhanced',
    version: '1.0.0',
    status: 'running'
  });
});

// API 路由
app.route('/api', apiRoutes);

// 404 处理
app.notFound((c) => {
  return c.json({
    success: false,
    error: 'Not Found',
    message: '请求的资源不存在'
  }, 404);
});

// 全局错误处理
app.onError((err, c) => {
  return c.json({
    success: false,
    error: 'Internal Server Error',
    message: err.message
  }, 500);
});

export default app;