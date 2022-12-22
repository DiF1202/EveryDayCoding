type isAny<T> = 'dong' extends ('aa' & T) ? true : false
type demo = isAny<any>