const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all catagories
router.get('/', async (req, res) => {
  try {
    const productData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(404).json(err);
  }
});

// get one catagory
router.get('/:id', async (req, res) => {
  try {
    const productData = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Product }]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(404).json(err);
  }
});

  // create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// Delete one catagory
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(204).json(productData);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
