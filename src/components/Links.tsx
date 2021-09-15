import { Link, LinkProps } from '@chakra-ui/react';
import { UrlObject } from 'url';
import NextLink from 'next/link';
import React from 'react';

const linkStyles: Omit<LinkProps, 'href'> = {
  textDecoration: 'underline',
  textColor: 'secondary.light',
  textDecorationThickness: '0.125em',
  textUnderlineOffset: '2.5px',
  _hover: {
    textColor: 'inherit',
  },
};

export const ExternalLink = ({ children, ...rest }: LinkProps) => {
  return (
    <Link isExternal {...linkStyles} {...rest}>
      {children}
    </Link>
  );
};

interface InternalLinkProps extends Omit<LinkProps, 'href'> {
  href: string | UrlObject;
  variant?: 'plain' | 'styled';
}

export const InternalLink = ({ children, href, variant = 'plain', ...rest }: InternalLinkProps) => {
  const styles: Omit<LinkProps, 'href'> = variant === 'styled' ? linkStyles : {};
  return (
    <NextLink href={href} passHref>
      <Link {...styles} {...rest}>
        {children}
      </Link>
    </NextLink>
  );
};