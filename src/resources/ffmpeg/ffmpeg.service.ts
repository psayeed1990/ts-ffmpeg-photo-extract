import Photo from '@/resources/ffmpeg/ffmpeg.interface';

class FFMPEGService {
    /**
     * Create a new post
     */
    public async extractPhotoFromVideo(
        timestamp: number,
        url: string
    ): Promise<Photo> {
        try {
            return {
                timestamp,
                url,
            };
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }
}

export default FFMPEGService;
