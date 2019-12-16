import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import getThemeColor from "../../utils/getThemeColor"
import Avatar from "../Avatar";
import * as S from "./styled";

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
      <S.ProfileLink
        to="/"
        cover 
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAutor>
          {title}
          <S.ProfilePostiion>{position}</S.ProfilePostiion>
        </S.ProfileAutor>
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </ S.ProfileLink>
    </S.ProfileWrapper>
  )
}

export default Profile