module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: [:show, :update, :destroy]

      # GET /api/v1/posts
      def index
        #@posts = Post.all
        #render json: @posts, status: :ok
        posts = [
          { id: 1, title: "First Post", body: "Learning Ruby on Rails APIs" },
          { id: 2, title: "Second Post", body: "Comparing Node.js and Rails" },
          { id: 3, title: "Third Post", body: "Hardcoding JSON responses" }
        ]
        render json: posts, status: :ok
      end

      # GET /api/v1/posts/:id
      def show
        render json: @post, status: :ok
      end

      # POST /api/v1/posts
      def create
        @post = Post.new(post_params)

        if @post.save
          render json: @post, status: :created
        else
          render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/posts/:id
      def update
        if @post.update(post_params)
          render json: @post, status: :ok
        else
          render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/posts/:id
      def destroy
        @post.destroy
        head :no_content
      end

      private

      def set_post
        @post = Post.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { error: "Post not found" }, status: :not_found
      end

      def post_params
        params.require(:post).permit(:title, :body)
      end
    end
  end
end