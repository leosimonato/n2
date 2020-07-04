export default interface RoutesRepository<T> {
  pegarBody(req: T);

  pegarParameter(req: T, parameter: string);
}