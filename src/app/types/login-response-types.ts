export type LoginResponse = {
    token: string,
    drt: number,
    // backend may return either `nome` or `nomeUsuario` (or both) — accept both
    nome?: string,
    nomeUsuario?: string,
    // backend may return either `cargo` or `cargoUsuario`
    cargo?: string,
    cargoUsuario?: string
}
