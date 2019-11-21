import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';
import * as S from './styled'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description }
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAutor>
          {title}
          <S.ProfilePostiion>{position}</S.ProfilePostiion>
        </S.ProfileAutor>
        <h2>{position}</h2>
      </ S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile