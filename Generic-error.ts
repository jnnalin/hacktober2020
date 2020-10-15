 return this._http.get<IMyObj[]>(this._serviceUrl)
      .do(this.handleSuccessResponse)
      .catch(this.handleErrorResponse);

    protected handleErrorResponse(err: HttpErrorResponse) {
        console.info(err);
        // some logic based on code
    }
