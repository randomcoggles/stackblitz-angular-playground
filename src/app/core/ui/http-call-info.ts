
export class HttpCallInfo {
  isLoading = false;
  loadingMessage = '';
  error?: { 
    messages?: Array<string>;
    showRetry?: boolean;
    retry?: Function;

  };
  success?: { 
      messages?: Array<string>;    
    };
}