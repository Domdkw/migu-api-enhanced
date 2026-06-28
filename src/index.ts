/**
 * migu-api-enhanced 包入口
 * 直接复用 modules 导出，提供 createClient 工厂
 */

// ============================================================
// 直接导出 modules 所有函数
// ============================================================
export * from './modules';

// ============================================================
// 命名空间导出
// ============================================================
export * as modules from './modules';

// ============================================================
// 工厂函数
// ============================================================
import * as api from './modules';

/**
 * 创建一个咪咕 API 客户端实例
 * 返回对象包含所有 API 方法（直接复用 modules 函数）
 * @returns 包含所有 API 方法的对象
 */
export function createClient(): typeof api {
    return api;
}

/** 客户端类型 */
export type MiguClient = ReturnType<typeof createClient>;