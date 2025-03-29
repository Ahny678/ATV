// GET ALL SUBSCRIBERS
/**
 * @openapi
 * /subscribers/all:
 *   get:
 *     summary: Retrieve all subscribers
 *     tags:
 *       - Subscribers
 *     responses:
 *       200:
 *         description: Successfully retrieved all subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "List of subscribers"
 *       500:
 *         description: Server error while retrieving subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error retrieving subscribers"
 *                 error:
 *                   type: string
 */

// CREATE A NEW SUBSCRIBER
/**
 * @openapi
 * /subscribers/new:
 *   post:
 *     summary: Create a new subscriber
 *     tags:
 *       - Subscribers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *     responses:
 *       201:
 *         description: Create a new subscriber
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "{name} created succesfully"
 *
 *       400:
 *         description: Client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Bad request, Please enter a name"
 *                 error:
 *                   type: string
 */

//GET A SUBSCRIBER BY ID
/**
 * @openapi
 * /subscribers/{id}:
 *   get:
 *     summary: Get a subscriber by ID
 *     tags:
 *       - Subscribers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the subscriber to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved the subscriber
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Ahny Doe"
 *       404:
 *         description: Subscriber not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Subscriber does not exist"
 *       500:
 *         description: Server error while retrieving the subscriber
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error retrieving subscriber"
 *                 error:
 *                   type: string
 */

//UPDATE A SUBSCRIBER
/**
 * @openapi
 * /subscribers/{id}:
 *   patch:
 *     summary: Update a subscriber's name
 *     tags:
 *       - Subscribers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the subscriber to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Ahny Doe"
 *     responses:
 *       200:
 *         description: Successfully updated the subscriber
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "New name: Tiffany Doe"
 *       404:
 *         description: Subscriber not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Subscriber does not exist"
 *       500:
 *         description: Server error while updating the subscriber
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error updating subscriber"
 *                 error:
 *                   type: string
 */

//DELETE A SUBSCRIBER BY ID
/**
 * @openapi
 * /subscribers/{id}:
 *   delete:
 *     summary: Delete a subscriber
 *     tags:
 *       - Subscribers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the subscriber to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the subscriber
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Successfully deleted user"
 *       404:
 *         description: Subscriber not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Subscriber does not exist"
 *       500:
 *         description: Server error while deleting the subscriber
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error deleting subscriber"
 *                 error:
 *                   type: string
 */
