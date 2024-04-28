import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PostCardStyles';
import {PostProps} from '../../../utils/types';

const PostCard: React.FC<PostProps> = ({image_url, title, description}) => {
  return (
    <View style={styles.postContainer}>
      {image_url && (
        <Image
          style={styles.postImage}
          source={{
            uri: image_url,
          }}
        />
      )}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default PostCard;
