export default abstract class VideoPlayerEvent<T> {
  private _defaultPrevented = false;

  protected constructor(public readonly data: T) {

  }

  public get defaultPrevented(): boolean {
    return this._defaultPrevented;
  }

  public preventDefault(): void {
    this._defaultPrevented = true;
  }
}
