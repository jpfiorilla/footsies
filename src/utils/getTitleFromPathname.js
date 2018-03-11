import start from 'lodash.startcase';

const getTitleFromPathname = (pathname = '') =>
  typeof pathname === 'string'
    ? start(pathname.replace(/\W/g, ' ')).trim()
    : '';

export default getTitleFromPathname;
