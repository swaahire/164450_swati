package io.schultz.dustin.filters;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;

public class AddRequestHeaderFilter extends ZuulFilter {

	@Override
	public boolean shouldFilter() {	
		return true;
	}

	@Override
	public Object run() {
		RequestContext ctx=RequestContext.getCurrentContext();
		ctx.addZuulRequestHeader("x-location", "USA");
				return null;
	}

	@Override
	public String filterType() {
		return "pre";
	}

	@Override
	public int filterOrder() {
		// TODO Auto-generated method stub
		return 0;
	}

}
