class Sand{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		restitution :0.2,
		friction :3,
		density :3
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

		

	}
	display()
	{
			var sandpos=this.body.position;		
			push()
			translate(sandpos.x,sandpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("white");
			fill("brown");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			pop()
	}

}