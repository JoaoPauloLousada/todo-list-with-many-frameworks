export interface IUseCase<Tinput, Toutput> {
  execute(props: {
    vars?: Tinput;
    next?: (args: { data: Toutput | null; error: Error | null }) => unknown;
  }): Promise<void>;
}
