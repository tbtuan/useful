import React, { Component, useState } from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import Collection from './collection';

import { Layout, Link } from '../components';
import config from '../../config';

import styled from '@emotion/styled';

const StyledHeading = styled('h1')`
  font-size: 32px;
  line-height: 1.5;
  font-weight: 500;
  border-left: 2px solid ${({ theme }) => theme.colors.link};
  padding: 0 16px;
  flex: 1;
  margin-top: 0;
  padding-top: 0;
  color: ${props => props.theme.colors.heading};
`;

const StyledMainWrapper = styled('div')`
  color: ${props => props.theme.colors.text};

  ul,
  ol {
    li {
      font-size: 16px;
      line-height: 1.8;
      font-weight: 400;
    }
  }

  a {
    transition: color 0.15s;
    color: ${props => props.theme.colors.link};
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;

    background: ${props => props.theme.colors.background};
  }

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;

const TitleWrapper = styled('div')`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(230, 236, 241);
  margin-bottom: 32px;

  @media (max-width: 767px) {
    padding: 0 15px;
    display: block;
  }
`;

const CheatsheetTemplate = ({ data }) => {
  if (!data) {
    return null;
  }
  const { mdx } = data;
  return (
    <div>
      <TitleWrapper>
        <StyledHeading>{mdx.fields.title}</StyledHeading>
      </TitleWrapper>
      <StyledMainWrapper>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </StyledMainWrapper>
    </div>
  );
};

export default CheatsheetTemplate;
