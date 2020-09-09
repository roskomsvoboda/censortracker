const ERR_CONNECTION_RESET = 'net::ERR_CONNECTION_RESET'
const ERR_CONNECTION_TIMED_OUT = 'net::ERR_CONNECTION_TIMED_OUT'
const ERR_TUNNEL_CONNECTION_FAILED = 'net::ERR_TUNNEL_CONNECTION_FAILED'
const ERR_PROXY_CONNECTION_FAILED = 'net::ERR_PROXY_CONNECTION_FAILED'
const ERR_PROXY_CERTIFICATE_INVALID = 'net::ERR_PROXY_CERTIFICATE_INVALID'

class Errors {
  isThereProxyConnectionError = (error) => [
    ERR_TUNNEL_CONNECTION_FAILED,
    ERR_PROXY_CONNECTION_FAILED,
    ERR_PROXY_CERTIFICATE_INVALID,
  ].includes(error)

  isThereConnectionError = (error) => [
    ERR_CONNECTION_RESET,
    ERR_CONNECTION_TIMED_OUT,
  ].includes(error)
}

export default new Errors()
