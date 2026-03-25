/* tslint:disable */
/* eslint-disable */

export class Game {
    free(): void;
    [Symbol.dispose](): void;
    can_hold(): boolean;
    drain_events(): Uint8Array;
    get_arr(): number;
    get_board(): Uint8Array;
    get_das(): number;
    get_hold_piece(): number;
    get_level(): number;
    get_lines_cleared(): number;
    get_lock_delay(): number;
    get_next_pieces(count: number): Uint8Array;
    get_score(): number;
    is_game_over(): boolean;
    is_hold_used(): boolean;
    key_down(key: number): void;
    key_up(key: number): void;
    constructor();
    reset(): void;
    restart(): void;
    set_arr(arr: number): void;
    set_das(das: number): void;
    set_generator(kind: GeneratorKind): void;
    set_ghost(ghost: boolean): void;
    set_lock_delay(lock_delay: number): void;
    tick(): void;
    use_guideline_ruleset(start_level: number): void;
    use_nes_ruleset(start_level: number): void;
}

export enum GeneratorKind {
    SevenBag = 0,
    NES = 1,
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_game_free: (a: number, b: number) => void;
    readonly game_new: () => number;
    readonly game_tick: (a: number) => void;
    readonly game_is_game_over: (a: number) => number;
    readonly game_get_board: (a: number) => [number, number];
    readonly game_is_hold_used: (a: number) => number;
    readonly game_get_next_pieces: (a: number, b: number) => [number, number];
    readonly game_key_down: (a: number, b: number) => void;
    readonly game_key_up: (a: number, b: number) => void;
    readonly game_get_hold_piece: (a: number) => number;
    readonly game_get_lines_cleared: (a: number) => number;
    readonly game_get_score: (a: number) => number;
    readonly game_get_level: (a: number) => number;
    readonly game_set_arr: (a: number, b: number) => void;
    readonly game_set_lock_delay: (a: number, b: number) => void;
    readonly game_set_ghost: (a: number, b: number) => void;
    readonly game_set_das: (a: number, b: number) => void;
    readonly game_get_arr: (a: number) => number;
    readonly game_get_das: (a: number) => number;
    readonly game_get_lock_delay: (a: number) => number;
    readonly game_can_hold: (a: number) => number;
    readonly game_reset: (a: number) => void;
    readonly game_restart: (a: number) => void;
    readonly game_use_nes_ruleset: (a: number, b: number) => void;
    readonly game_use_guideline_ruleset: (a: number, b: number) => void;
    readonly game_set_generator: (a: number, b: number) => void;
    readonly game_drain_events: (a: number) => [number, number];
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
