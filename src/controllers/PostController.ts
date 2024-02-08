import { Request, Response } from "express";
import { Post } from "../models/Post";

export class PostController {
  static async store(req: Request, res: Response) {
    const post = new Post({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      date: Date.now(),
      status: req.body.status,
      user_id: req.body.user_id,
      user_name: req.body.user_name,
    });

    if (req.files?.length != 0) {
      post.image = (req.files as Express.Multer.File[]).map(
        (file) => file.filename
      );
    }

    try {
      await post.save();
      return res.json({
        success: true,
        message: "post saved",
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.json({
          success: false,
          message: error.message,
        });
      }
    }
  }

  static async getPosts(req: Request, res: Response) {
    const posts = await Post.find({ status: 1 })
      .sort({ date: "descending" })
      .exec();

    if (posts == null) {
      return res.status(401).json({
        success: false,
        message: "No posts found",
      });
    }

    return res.json({
      success: true,
      posts,
    });
  }

  static async getPostsByUser(req: Request, res: Response) {
    const posts = await Post.find({ user_id: req.params.user_id })
      .sort({ date: "desc" })
      .exec();
    if (posts == null) {
      return res.status(404).json({
        success: false,
        message: "No offers available",
      });
    }

    return res.json({
      status: true,
      posts,
    });
  }

  static async getPostById(req: Request, res: Response) {
    const post = await Post.findById(req.params.id);

    if (post == null) {
      return res.status(404).json({
        success: false,
        message: "Offer not found!",
      });
    }

    return res.json({
      status: true,
      post,
    });
  }

  static async destroy(req: Request, res: Response) {
    const onDeleteResponse = await Post.findByIdAndDelete(req.params.id);
    console.log(onDeleteResponse);
    if (onDeleteResponse == null) {
      return res.status(404).json({
        success: false,
        message: "offer not found",
      });
    }

    return res.json({
      success: true,
      message: "Offer deleted successfully",
    });
  }

  static async uploadMoreImages(req: Request, res: Response) {
    if (req.files?.length != 0) {
      const image = (req.files as Express.Multer.File[]).map(
        (file) => file.filename
      );
      try {
        const resp = await Post.findById(req.params.id, { image });
        if (resp != null) {
          const newImage = resp.image;
          if (Array.isArray(req.body.img)) {
            req.body.img.forEach((img: any) => {
              newImage?.push(img);
            });
          } else if (req.body.img) {
            newImage?.push(req.body.img);
          }
          await Post.findByIdAndUpdate(req.params.id, {
            $set: { image: newImage },
          });
        }
        return res.json({
          success: true,
          message: "Updated successfully",
        });
      } catch (error: any) {
        return res.status(404).json({
          success: false,
          message: error?.message,
        });
      }
    }
    return res.status(404).json({
      success: false,
      message: "no file provided",
    });
  }

  static async updatePost(req: Request, res: Response) {
    await Post.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
      },
    })
      .then((resp) => {
        return res.json({
          success: true,
          offer: resp,
        });
      })
      .catch((e) => {
        return res.json({
          success: false,
          message: e.message,
        });
      });
  }

  static async getCountByCategory(req: Request, res: Response) {
    const postCount = await Post.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ])
      .sort({ _id: "ascending" })
      .exec();

    if (!postCount) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    return res.json({
      success: true,
      post: postCount,
    });
  }
}
