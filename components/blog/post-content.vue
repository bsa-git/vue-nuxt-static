<template>
    <div id="post-content">
        <!-- Preview Image -->
        <img class="img-responsive img-hover"
             :src="blog.post.img"
             alt="">
    
        <!-- Blog Post -->
    
        <hr>
    
        <!-- Date/Time -->
        <ul class="post-meta">
            <li><i class="fa fa-user"></i> By <a :href="blog.post.meta.user.url">{{ blog.post.meta.user.name }}</a></li>
            <li><i class="fa fa-clock-o"></i>Posted on {{ blog.post.meta.date }}</li>
            <li><i class="fa fa-tag"></i> <a :href="tag.url"
                   v-for="(tag, index) in blog.post.meta.tags"><span v-if="index">, </span>{{ tag.item }}</a></li>
            <li><i class="fa fa-comment-o"></i> <a :href="blog.post.meta.comments.url">{{ blog.post.meta.comments.count }} Comments</a></li>
        </ul>
    
        <hr>
    
        <!-- Post Content -->
        <div v-html="blog.post.content"></div>
    
        <hr>
    
        <!-- Posted Comments -->
        <h1 class="comments-title">({{ blog.post.meta.comments.count }}) Comments</h1>
        <!-- Comment -->
        <div :class="['media', (index + 1) % 2 ? 'comment-box':'' ]"
             v-for="(comment, index) in blog.post.comments">
            <a class="pull-left"
               :href="comment.user_url">
                <img class="media-object"
                     :src="comment.img"
                     alt="">
            </a>
            <div class="media-body">
                <div class="comment-meta">
                    <span class="comment-by">{{ comment.user_name }}</span>
                    <span class="comment-date">{{ comment.date }}</span>
                    <span class="reply-link"><a :href="comment.reply_url">Reply</a></span>
                </div>
                <div v-html="comment.content"></div>
                <!-- Reply Comment1 -->
                <div :class="['media', (index + 1) % 2 ? 'comment-box':'' ]"
                     v-for="(reply_comment1, index) in comment.reply">
                    <a class="pull-left"
                       :href="reply_comment1.user_url">
                        <img class="media-object"
                             :src="reply_comment1.img"
                             alt="">
                    </a>
                    <div class="media-body">
                        <div class="comment-meta">
                            <span class="comment-by">{{ reply_comment1.user_name }}</span>
                            <span class="comment-date">{{ reply_comment1.date }}</span>
                            <span class="reply-link"><a :href="reply_comment1.reply_url">Reply</a></span>
                        </div>
                        <div v-html="reply_comment1.content"></div>
                        <!-- Reply Comment2 -->
                        <div :class="['media', (index + 1) % 2 ? 'comment-box':'' ]"
                             v-for="(reply_comment2, index) in reply_comment1.reply">
                            <a class="pull-left"
                               :href="reply_comment2.user_url">
                                <img class="media-object"
                                     :src="reply_comment2.img"
                                     alt="">
                            </a>
                            <div class="media-body">
                                <div class="comment-meta">
                                    <span class="comment-by">{{ reply_comment2.user_name }}</span>
                                    <span class="comment-date">{{ reply_comment2.date }}</span>
                                    <span class="reply-link"><a :href="reply_comment2.reply_url">Reply</a></span>
                                </div>
                                <div v-html="reply_comment2.content"></div>
                                <!-- Reply Comment3 -->
                                <div :class="['media', (index + 1) % 2 ? 'comment-box':'' ]"
                                     v-for="(reply_comment3, index) in reply_comment2.reply">
                                    <a class="pull-left"
                                       :href="reply_comment3.user_url">
                                        <img class="media-object"
                                             :src="reply_comment3.img"
                                             alt="">
                                    </a>
                                    <div class="media-body">
                                        <div class="comment-meta">
                                            <span class="comment-by">{{ reply_comment3.user_name }}</span>
                                            <span class="comment-date">{{ reply_comment3.date }}</span>
                                            <span class="reply-link"><a :href="reply_comment3.reply_url">Reply</a></span>
                                        </div>
                                        <div v-html="reply_comment3.content"></div>
                                    </div>
                                </div>
                                <!-- End Reply Comment3 -->
                            </div>
                        </div>
                        <!-- End Reply Comment2 -->
                    </div>
                </div>
                <!-- End Reply Comment1 -->
            </div>
        </div>
        <!-- End Comment -->
    
        <!-- Comments Form -->
        <div class="well">
            <h4>Leave a Comment:</h4>
            <form action="#">
                <div class="row">
                    <div class="col-md-4">
                        <label for="author">Name<span class="required">*</span></label>
                        <input class="form-control"
                               type="text"
                               aria-required="true"
                               size="30"
                               value=""
                               name="author"
                               id="author">
                    </div>
                    <div class="col-md-4">
                        <label for="email">Email<span class="required">*</span></label>
                        <input class="form-control"
                               type="text"
                               aria-required="true"
                               size="30"
                               value=""
                               name="author"
                               id="email">
                    </div>
                    <div class="col-md-4">
                        <label for="url">Website<span class="required">*</span></label>
                        <input class="form-control"
                               type="text"
                               aria-required="true"
                               size="30"
                               value=""
                               name="url"
                               id="url">
                    </div>
                </div>
                <div class="row"
                     style="margin-top: 20px;">
                    <div class="col-md-12">
                        <label for="comment">Add Your Comment</label>
                        <textarea class="form-control"
                                  aria-required="true"
                                  name="comment"
                                  id="comment"></textarea>
                        <input style="margin-top: 15px;"
                               type="submit"
                               class="btn btn-primary"
                               value="Submit Comment"
                               id="submit"
                               name="submit">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters({
        blog: 'getBlog',
    }),
}
</script>