export enum HttpStatus {
  OK = 200
}

export const get = async <T>(path: string, acceptedResponseCodes : HttpStatus[]): Promise<T> => {
  const response = await fetch(path);
  const responseData = await response.json();

  if(acceptedResponseCodes.indexOf(response.status) === -1) {
    throw new Error(responseData.message)
  }

  return responseData;
};
