import React, { memo, useMemo, useCallback } from "react";
import styled from "styled-components/native";
import HTML from "react-native-render-html";
import { StyleSheet } from "react-native";
import { AppColors } from "src/common/AppColors";
import { BaseImageView } from "src/customeView";
import StringHTMLHelper from "src/helpers/StringHTMLHelper";
import { Linking } from "react-native";
import linkifyHtml from "linkifyjs/html";

const urlRegex = /\bhttps?:\/\/[a-z0-9\.\-_](:\d+)?[^ \n\t<>()\[\]]*/i;

const linkifyOptions = {
  validate: {
    url: function(value) {
      return urlRegex.test(value);
    },
    email: false
  },
  ignoreTags: ["a", "script", "style"]
};


interface Props {
  htmlContent?: string
}

const tagsStyles = {
  p: { fontSize: 13, color: AppColors.grey2, lineHeight: 25, padding: 0, margin: 0 },
  a: { fontSize: 13 },
  img: { marginTop: 8 }
};

const renderers = {
  img: (img) => <BaseImageView uri={img.src} />
};

const BaseHTMLRenderView = memo((props: Props) => {

  const htmlContent = useMemo((): string => {
    if (props.htmlContent) {
      return (props.htmlContent ? linkifyHtml(props.htmlContent, linkifyOptions) : "");
    }
    return [];
  }, [props.htmlContent]);

  const listImageURI = useMemo((): string[] => {
    if (props.htmlContent) {
      let list = StringHTMLHelper(props.htmlContent).getImageURI()._imageURI;
      return list;
    }
    return [];
  }, [props.htmlContent]);

  const onLinkPress = useCallback((evt, href) => {
    Linking.openURL(href);
  }, [props.htmlContent]);

  const customRenderers = useMemo(() => {
    return (
      {
        img: (img) => <BaseImageView uri={img.src} listUri={listImageURI} />
        // p: () => <BaseImageView uri={"https://i.imgur.com/WzghTe8.jpg"} listUri={[]}/>
        // a: (a) => <BaseImageView uri={"https://i.imgur.com/WzghTe8.jpg"} listUri={[]}/>,
        // p: (textwrapper) => <SText>Value {textwrapper}</SText>
      }
    );
  }, [listImageURI]);

  const alterData = useCallback((node) => {
    let { parent, data } = node;
    if (parent.name === "p") {
      return parent.name + " href : " + data;
    }
    return data;
  }, []);

  return (
    <>
      <HTML html={htmlContent}
            containerStyle={styles.containerStyle}
            baseFontStyle={styles.baseFontStyle}
            tagsStyles={tagsStyles}
            renderers={customRenderers}
            onLinkPress={onLinkPress}
           // alterData={alterData}
      />
    </>
  );
});

export default BaseHTMLRenderView;

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 0,
    paddingBottom: 0
  },
  baseFontStyle: {
    fontSize: 13,
    color: AppColors.grey2
  }
});

const SText = styled.Text``;
