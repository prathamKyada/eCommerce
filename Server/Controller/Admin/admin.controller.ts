import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express, { Request, Response } from "express";
import BodyParser from "body-parser";
import { interface_companies } from "../../Interface/company.interface";
import { product_category } from "../../Interface/product_category.interface";
import { product_details } from "../../Interface/product_details.interface";

const app = express();

app.use(BodyParser.json());

// export const addCompany = async (req: Request, res: Response) => {
//   const { company_name }: companies = req.body;
//   try {
//     const company_exist = await prisma.company.findFirst({
//       where: { company_name: company_name },
//     });

//     if (!company_exist) {
//       res.status(401).json({
//         success: "false",
//         message: "This Company name is already Exist",
//       });
//     }

//     if (company_exist) {
//       await prisma.company.create({
//         data: {
//           company_name: company_name,
//         },
//       });
//       res
//         .status(201)
//         .json({ success: "true", message: "Data inserted Successfully !!" });
//     } else {
//       res
//         .status(401)
//         .json({ success: "false", message: "Internal Server Error" });
//     }
//   } catch (error) {
//     console.log("SignUp Error > ", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// export const addProductCategory = async (req: Request, res: Response) => {
//   const { product_category_name }: product_category = req.body;
//   try {
//     const productCategoryExist = await prisma.product_category.findFirst({
//       where: { product_category_name: product_category_name },
//     });

//     if (!productCategoryExist) {
//       res.status(401).json({
//         success: "false",
//         message: "This Company name is already Exist",
//       });
//     }

//     if (productCategoryExist) {
//       await prisma.product_category.create({
//         data: {
//           product_category_name: product_category_name,
//         },
//       });
//       res
//         .status(201)
//         .json({ success: "true", message: "Data inserted Successfully !!" });
//     } else {
//       res
//         .status(401)
//         .json({ success: "false", message: "Internal Server Error" });
//     }
//   } catch (error) {
//     console.log("SignUp Error > ", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// export const addProductDetails = async (req: Request, res: Response) => {
//   const {
//     product_name,
//     product_description,
//     product_price,
//     company_id,
//     product_category_id,
//   }: product_details = req.body;

//   try {
//     if (req.body) {
//       if (
//         !product_name ||
//         !product_description ||
//         !product_price ||
//         !company_id ||
//         !product_category_id
//       ) {
//         res.status(400).json({ success: "false", message: "Data is Missing" });
//       } else {
//         const company_id_exists = await prisma.company.findFirst({
//           where: { id: company_id },
//         });

//         if (!company_id_exists) {
//           res.status(401).json({ message: "Company doesn't Exist" });
//         }

//         const product_category_id_exist =
//           await prisma.product_category.findFirst({
//             where: { id: product_category_id },
//           });

//         if (!product_category_id_exist) {
//           res.status(402).json({ message: "Product Category Doesn't Exist" });
//         }
//       }
//       const data = await prisma.product_details.create({
//         data: {
//           product_name: product_name,
//           product_description: product_description,
//           product_price: product_price,
//           company_id: company_id,
//           product_category_id: product_category_id,
//         },
//       });

//       if (!data) {
//         params.product_name;
//         res
//           .status(404)
//           .json({ success: "false", message: "Internal Server Error" });
//       } else {
//         res
//           .status(202)
//           .json({ success: "true", message: "Data Inserted Succesfully" });
//       }
//     } else {
//       res.status(403).json({ message: "No Data Found" });
//     }
//   } catch (error) {
//     console.log("SignUp Error > ", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

export class AdminService {
  addCompany = async (req: Request, res: Response) => {
    const { company_name }: interface_companies = req.body;
    try {
      const company_exist = await prisma.company.findFirst({
        where: { company_name: company_name },
      });

      if (!company_exist) {
        res.status(401).json({
          success: "false",
          message: "This Company name is already Exist",
        });
      }

      if (company_exist) {
        await prisma.company.create({
          data: {
            company_name: company_name,
          },
        });
        res
          .status(201)
          .json({ success: "true", message: "Data inserted Successfully !!" });
      } else {
        res
          .status(401)
          .json({ success: "false", message: "Internal Server Error" });
      }
    } catch (error) {
      console.log("SignUp Error > ", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  addProductCategory = async (req: Request, res: Response) => {
    const { product_category_name }: product_category = req.body;
    try {
      const productCategoryExist = await prisma.product_category.findFirst({
        where: { product_category_name: product_category_name },
      });

      if (!productCategoryExist) {
        res.status(401).json({
          success: "false",
          message: "This Company name is already Exist",
        });
      }

      if (productCategoryExist) {
        await prisma.product_category.create({
          data: {
            product_category_name: product_category_name,
          },
        });
        res
          .status(201)
          .json({ success: "true", message: "Data inserted Successfully !!" });
      } else {
        res
          .status(401)
          .json({ success: "false", message: "Internal Server Error" });
      }
    } catch (error) {
      console.log("SignUp Error > ", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  addProductDetails = async (req: Request, res: Response) => {
    // const {
    //   product_name,
    //   product_description,
    //   product_price,
    //   company_id,
    //   product_category_id,
    // }: product_details = req.body;

    // const user_inserted_data : product_details = {
    //   product_name: req.body.product_name,
    //   product_description: req.body,
    //   product_price: req.body,
    //   company_id: req.body,
    //   product_category_id: req.body,
    //   // id: 0
    // }

    const user_inserted_data: product_details = {
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      product_price: req.body.product_price,
      company_id: req.body.company_id,
      product_category_id: req.body.product_category_id,
      id: 0
    };

    try {
      if (req.body) {
        if (
          !user_inserted_data.product_name ||
          !user_inserted_data.product_description ||
          !user_inserted_data.product_price ||
          !user_inserted_data.company_id ||
          !user_inserted_data.product_category_id
        ) {
          res
            .status(400)
            .json({ success: "false", message: "Data is Missing" });
        } else {
          const company_id_exists = await prisma.company.findFirst({
            where: { id: user_inserted_data.company_id },
          });

          if (!company_id_exists) {
            res.status(401).json({ message: "Company doesn't Exist" });
          }

          const product_category_id_exist =
            await prisma.product_category.findFirst({
              where: { id: user_inserted_data.product_category_id },
            });

          if (!product_category_id_exist) {
            res.status(402).json({ message: "Product Category Doesn't Exist" });
          }
        }
        const data = await prisma.product_details.create({
          data: {
            product_name: user_inserted_data.product_name,
            product_description: user_inserted_data.product_description,
            product_price: user_inserted_data.product_price,
            company_id: user_inserted_data.company_id,
            product_category_id: user_inserted_data.product_category_id,
          },
        });

        if (!data) {
          // params.product_name;
          res
            .status(404)
            .json({ success: "false", message: "Internal Server Error" });
        } else {
          res
            .status(202)
            .json({ success: "true", message: "Data Inserted Succesfully" });
        }
      } else {
        res.status(403).json({ message: "No Data Found" });
      }
    } catch (error) {
      console.log("SignUp Error > ", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
