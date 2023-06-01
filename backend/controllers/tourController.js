import Tour from '../models/Tour.js'



//create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        res.status(200).json({ success: true, message: 'Successfully Created', data: savedTour })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to Create. Try again' })
    }
}


//update tour
export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({ success: true, message: 'Successfully Updated', data: updatedTour })
    }

    catch (err) {
        res.status(500).json({ success: false, message: 'failed to update' })

    }
}
//delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id

    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully Deleted' })
    }

    catch (err) {
        res.status(500).json({ success: false, message: 'failed to Delete' })

    }
}
//getsingle tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id

    try {
        const tour = await Tour.findById(id).populate('reviews');
        res.status(200).json({ success: true, message: 'Successfully get single tour', data: tour })
    }

    catch (err) {
        res.status(404).json({ success: false, message: 'Not found' })

    }
}
//get all tour
export const getAllTour = async (req, res) => {

    //for pagination
    const page = parseInt(req.query.page)




    try {
        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8)

        res.status(200).json({ success: true, count: tours.length, message: "Successful", data: tours })

    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found' })

    }
}



//get tour by search

export const getTourBySearch = async (req, res) => {
    //i is for case senstitvity
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)



    try {
        //gte is equal to greater than
        const tours = await Tour.find({
            city, distance: { $gte: distance }, maxGroupSize:
                { $gte: maxGroupSize }
        }).populate('reviews')

        res.status(200).json({ success: true, message: "Successful", data: tours })

    } catch (error) {
        res.status(404).json({ success: false, message: "not found" })

    }
}

//get featured tours only 
export const getFeaturedTour = async (req, res) => {


    try {
        const tours = await Tour.find({ featured: true }).populate('reviews').limit(8)

        res.status(200).json({ success: true, message: "Successful", data: tours })

    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found' })

    }
}

//tour counts code
export const getTourCount= async(req,res)=>{
    try {
        const tourCount=await Tour.estimatedDocumentCount()

        res.status(200).json({succes:true,data:tourCount})

        
    } catch (error) {
        res.status(500).json({success:false,message:"failed to fetch"})
        
    }
}







