import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PostCardStyles';
import {PostProps} from '../../../utils/types';
import {PostLogo} from '../../Atoms/Icon';
const PostCard: React.FC<PostProps> = ({image_url, title, keywords}) => {
  return (
    <View style={styles.postContainer}>
      {image_url ? (
        <Image
          style={styles.postImage}
          source={{
            uri: image_url,
          }}
        />
      ) : (
        <PostLogo />
      )}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        {keywords ? (
          <Text style={styles.description}>{keywords}</Text>
        ) : (
          <Text style={styles.description}>No Key Words</Text>
        )}
      </View>
    </View>
  );
};

export default PostCard;
