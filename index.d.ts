import * as grpc from 'grpc';

export interface GRPCError extends Error {
    code: number;
    metadata: grpc.Metadata;
}

export function createGRPCError(
    message: string | number | object | Error,
    code: number | object | grpc.status,
    metadata?: object,
): GRPCError;

export function applyCreate(
    error: Error,
    message: string | number | object | Error,
    code: number | object | grpc.status,
    metadata?: object,
): GRPCError;
